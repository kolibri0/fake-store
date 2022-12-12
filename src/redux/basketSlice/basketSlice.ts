import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IItem } from '../../components/products/product'

interface IinitialState {
    items: IItem[]
    allPrice: number
}

const initialState: IinitialState= {
    items: [],
    allPrice: 0
}

const BasketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<any>){
            const item = state.items.find((item: any) => item.id === action.payload.id)

            if(item){
                if(item.count){
                    item.count++
                }
            }else{
                state.items.push({...action.payload, count: 1})
            }

            state.allPrice = state.items.reduce((a, b) => a + (b.price * b.count), 0)
        },
        removeItem(state, action: PayloadAction<IItem>){
            state.items = state.items.filter((item) => item.id !== action.payload.id)

        },
        removeAll(state){
            state.items = []
        }
    }
})

export const {addItem, removeItem, removeAll} = BasketSlice.actions
export default BasketSlice.reducer

