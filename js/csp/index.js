import {Livewire, Alpine} from '../livewire'
import {cspEvaluator} from '@alpinejs/csp/src/evaluator'

Alpine.setEvaluator(cspEvaluator)

export {Livewire, Alpine}

