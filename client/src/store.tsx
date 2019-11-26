import React from "react"
import { observable } from "mobx"

@observable
class Store {

}

export const StoreProvider = React.createContext(new Store())