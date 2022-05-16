import {handleActions, createAction} from 'redux-actions'
import {operate} from "@/helpers/calc-operation"

const INITIAL_STATE = {
  total: '',
  prev: '',
  operation: '',
  remembered: '',
  expression: [],
}

export const addToDisplay = createAction(
  'ADD_TO_DISPLAY',
  button => button,
)
export const addOperation = createAction(
  'ADD_OPERATION',
)
export const deleteAll = createAction(
  'DELETE_ALL',
)
export const clearLast = createAction(
  'CLEAR_LAST',
)
export const calculate = createAction(
  'CALCULATE',
)
export const changeSign = createAction(
  'CHANGE_SING',
)
const operations = ['-', '+', '/', '*', '%']

export default handleActions({
  ADD_TO_DISPLAY: (state, action) => {
    if (!state.prev && state.operation === "=") {
      return {
        ...state,
        total: '' + action.payload.toString(),
        operation: '',
        expression: [...state.expression, action.payload],
      }
    } else {
      return {
        ...state,
        total: state.total + action.payload.toString(),
        expression: [...state.expression, action.payload],
      }
    }
  },
  ADD_OPERATION: (state, action) => {
    if (state.prev && state.operation) {
      if (action.payload === '*' || action.payload === "/") {
        if (state.operation === '+' || state.operation === '-') {
          if (state.total) {
            return {
              ...state,
              total: '',
              prev: state.total,
              operation: action.payload,
              remembered: state.operation + state.prev,
              expression: [...state.expression, action.payload],
            }
          } else {
            return {
              ...state,
              operation: action.payload,
              expression: [...state.expression.slice(0, state.expression.length - 1), action.payload],
            }
          }
        } else {
          if (state.total) {
            return {
              ...state,
              total: '',
              prev: state.total,
              operation: action.payload,
              expression: [...state.expression, action.payload],
            }
          } else {
            return {
              ...state,
              operation: action.payload,
              expression: [...state.expression.slice(0, state.expression.length - 1), action.payload],
            }
          }
        }
      } else {
        return {
          ...state,
          total: '',
          prev: operate(state.total, state.prev, state.operation),
          operation: action.payload,
          expression: operations.includes(state.expression[state.expression.length - 1]) ? [...state.expression.slice(0, state.expression.length - 1), action.payload] : [...state.expression, action.payload],
        }
      }
    } else {
      if (action.payload === '-' && !state.total) {
        return {
          ...state,
          total: action.payload,
        }
      } else {
        return {
          ...state,
          total: '',
          operation: action.payload,
          prev: state.total,
          expression: state.operation === '='
            ? [...state.expression, state.total, action.payload] : [...state.expression, action.payload],
        }
      }
    }
  },
  DELETE_ALL: state => ({
    ...state,
    total: '',
    operation: '',
    prev: '',
    expression: [],
  }),
  CLEAR_LAST: state => ({
    ...state,
    total: '',
    expression: [...state.expression.slice(0, state.expression.length - 1)],
  }),
  CALCULATE: state => {
    if (state.prev && state.operation) {
      const remNum = Number(state.remembered || 0)
      const calculating = (remNum >= 0 ? remNum + Number(operate(state.total, state.prev, state.operation))
        : Math.abs(remNum) - Number(operate(state.total, state.prev, state.operation)))
      return {
        ...state,
        total: Number.isInteger(calculating)
          ? calculating.toString()
          : calculating.toFixed(3).toString(),
        expression: [],
        prev: '',
        remembered: '',
        operation: '=',
      }
    }
  },
  CHANGE_SING: state => ({
    ...state,
    total: (Number(state.total) * -1).toString(),
  }),

}, INITIAL_STATE)
