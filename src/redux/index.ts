import { cakeOrder, cakeRestock } from './features/cake/cakeSlice'
import { icecreamOrder, icecreamRestock } from './features/icecream/icecreamSlice'
import { fetchUsers } from './features/users/usersSlice'
import { InitialCakeType } from './features/cake/cakeType'


export { cakeOrder, cakeRestock, icecreamOrder, icecreamRestock, fetchUsers }

export type { InitialCakeType }