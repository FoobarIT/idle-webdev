export class MachineElement {
    static elementProcessor() {
        return (
        '<div class="card machine-element">'+
            '<div class="card-body">'+
               'Processor <small>Increase work value <span><b>0</b> </span>Level</small> <button id="up_proc" type="button" class="btn btn-light btn-sm float-right">Buy</button>'+
           ' </div>'+
        '</div>'
        )
    }
    static elementMemory() {
        return (
        '<div class="card machine-element">'+
            '<div class="card-body">'+
               'Memory <small>Earnings in your absence <span><b>0</b> </span>Level</small> <button type="button" class="btn btn-light btn-sm float-right">Light</button>'+
            ' </div>'+
        '</div>'
        )
    }
    static elementGpu() {
        return (
        '<div class="card machine-element">'+
            '<div class="card-body">'+
               'Graphics <small>Increase earning personal website <span><b>0</b> </span>Level</small> <button type="button" class="btn btn-light btn-sm float-right">Light</button>'+
            ' </div>'+
        '</div>'
        )
    }
    static elementStockage() {
        return (
        '<div class="card machine-element">'+
            '<div class="card-body">'+
               'Stockage <small> Increase visitor <span><b>0</b> </span>Level</small> <button type="button" class="btn btn-light btn-sm float-right">Light</button>'+
           ' </div>'+
        '</div>'
        )
    }
    static elementNetwork() {
        return (
        '<div class="card machine-element">'+
            '<div class="card-body">'+
               'Network <small> Improve security revoke <span><b>0</b> </span>Level</small> <button type="button" class="btn btn-light btn-sm float-right">Light</button>'+
            ' </div>'+
        '</div>'
        )
    }
}