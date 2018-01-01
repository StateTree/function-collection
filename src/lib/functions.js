import Entry from './entry';
import Ticker from 'ticker';

export default class Functions {
    constructor(triggerDoneNotifier, frameTriggerDoneNotifier) {
        this.entries = [];
        this.frameEntries = [];
        this.executingLaterInNextTickCount = 0;
        this.triggerDoneNotifier = triggerDoneNotifier;
    }
}

Functions.prototype.setTriggerDoneNotifier = function(triggerDoneNotifier){
	this.triggerDoneNotifier = triggerDoneNotifier;
}

Functions.prototype.removeTriggerDoneNotifier = function(){
	this.triggerDoneNotifier = null;
}

// the function that responsible for initiating trigger
// if called using this function will make a synced effect of execution
Functions.prototype.executeTriggerer = function(context, func, callback){
	const _executeTriggerer = ()=>{
		if(this.executingLaterInNextTickCount === 0){
			func.call(context);
			callback && callback()
		} else {
			const ticker = new Ticker(this, _executeTriggerer, callback, 3);
			ticker.execute();
		}
	};
	_executeTriggerer();
};

Functions.prototype.addListener = function(context, func, executeLaterInNextTick = false, priority = 0, callback = null){
    let entry;
    if (executeLaterInNextTick){

	     const tickerCallback = () => {
		    this.executingLaterInNextTickCount = this.executingLaterInNextTickCount - 1;
		    if(callback){
		    	callback.call(callback['this'])
		    }
		    if( this.executingLaterInNextTickCount === 0){
			    this.triggerDoneNotifier &&  this.triggerDoneNotifier();
		    }
	    };
        const ticker = new Ticker(context, func, tickerCallback, priority);
	    entry = new Entry(ticker, ticker.execute);
        this.frameEntries.push(entry)
    } else {
        entry = new Entry(context, func);
        this.entries.push(entry);
    }
};

Functions.prototype.removeListener = function(context,func, callback = null){
	let entry, i;
	const {frameEntries, entries} = this;

	for(i = 0; i < frameEntries.length; i++){
	    const frameEntry =  frameEntries[i];
		entry = frameEntry.context;
		if(entry.context === context && entry.listener === func){
			if(this.executingLaterInNextTickCount === 0){
				frameEntry.dispose();
			} else { // frame trigger Listeners are still running
				let tickerEntry;
				const disposeDoneNotifier = () => {
					if (this.executingLaterInNextTickCount === 0) {
						callback && callback();
					} else{
						tickerEntry = new Ticker(frameEntry,frameEntry.dispose, disposeDoneNotifier, 3);
						tickerEntry.execute();
					}
				};
				tickerEntry = new Ticker(frameEntry,frameEntry.dispose, disposeDoneNotifier, 3);
				tickerEntry.execute();
			}
			return;
		}
	}

	for(i = 0; i < entries.length; i++){
		entry = entries[i];
		if(entry.context === context && entry.listener === func){
			entry.dispose();
			callback && callback();
			return;
		}
	}
};

Functions.prototype.triggerListeners = function(){
    const entriesIndexToDispose = [];

	this.entries.forEach(function(entry, index){
        if (entry.listener) {
            entry.listener.apply(entry.context || entry.listener['this']);
        } else {
            entriesIndexToDispose.push(index);
        }
    });
    entriesIndexToDispose.forEach(function(entryIndex){
        this.entries.splice(entryIndex,1);
    }, this);


	if(this.frameEntries.length > 0){
		this.frameEntries.forEach(function(entry, index){
			if (entry.listener) {
				this.executingLaterInNextTickCount = this.executingLaterInNextTickCount + 1;
				entry.listener.apply(entry.context || entry.listener['this']);
			} else {
				entriesIndexToDispose.push(index);
			}
		}, this);
		entriesIndexToDispose.forEach(function(entryIndex){
			this.frameEntries.splice(entryIndex,1);
		}, this)
	} else {
		this.triggerDoneNotifier && this.triggerDoneNotifier();
	}
};