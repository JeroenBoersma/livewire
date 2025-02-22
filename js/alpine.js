
import Alpine from 'alpinejs'
import {cspEvaluator} from '@alpinejs/csp/src/evaluator'

// In CSP mode force csp evaluator
export function setCspEvaluator() {
    Alpine.setEvaluator(cspEvaluator)
}

export default Alpine
