//import {Init} from './modules/Init.js'
import {Clicker} from './module/Clicker.js'
import {Ath} from './module/Ath.js'
import {MachineElement} from './elements/machine.element.js'
//import {StacksElement} from './elements/stacks.element.js'



Ath.menuUpdate();

$('#machine_update').append(MachineElement.elementProcessor())
$('#machine_update').append(MachineElement.elementMemory())
$('#machine_update').append(MachineElement.elementGpu())
$('#machine_update').append(MachineElement.elementStockage())
$('#machine_update').append(MachineElement.elementNetwork())

// $('#stacks_update').append(StacksElement.elementHTML5())
// $('#stacks_update').append(StacksElement.elementCSS3())
// $('#stacks_update').append(StacksElement.elementJavascript())
// $('#stacks_update').append(StacksElement.elementPHP())
// $('#stacks_update').append(StacksElement.elementRuby())
Clicker.clickRate();

Ath.menuPager();