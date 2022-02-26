## actions need to follow for typing actions and states in redux 
/***
 * //action1 file
 * 1-define the ActionType1 ({type, payload})
 * 
 * //types file
 *  1-define possible actions in enum (type)
 *  2-create a global action = ActionType1 | ActionType2 | ActionType3...
 * 
 * //reducer (initilaState, action)
 * define the substate Type.
 * 
 * //rootReducer
 * include all substate types and create a new global state type
 */