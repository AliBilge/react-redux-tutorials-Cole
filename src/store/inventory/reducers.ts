import { InventoryState, REMOVE_ITEM_FROM_INVENTORY, ADD_NEW_ITEM_TO_INVENTORY, InventoryActionTypes } from "./types";

/**
 * If you ever want to have "dummy data" then why not bring it into here in the reducer until
 * your backend API endpoint is complete? Well, that's exactly what we're doing here until we introduce you
 * to API endpoints and now to get them! 
 */
const initialState: InventoryState = {
    itemTypesAvaliable: [
        {
            id: 13,
            currentStock: 5
        },
        {
            id: 17,
            currentStock: 0
        },
        {
            id: 87,
            currentStock: 99
        }
    ],
    items: [
        {
            id: 1,
            itemTypeId: 13,
            name: "TV 1337",
        },
        {
            id: 2,
            itemTypeId: 17,
            name: "Awesome Cake",
        },
        {
            id: 3,
            itemTypeId: 17,
            name: "Awesome Cake-2",
        },
        {
            id: 4,
            itemTypeId: 17,
            name: "Awesome Cake-3",
        },
        {
            id: 5,
            itemTypeId: 17,
            name: "Awesome Cake-4",
        },
        {
            id: 6,
            itemTypeId: 87,
            name: "Bad Cake",
        },
        {
            id: 7,
            itemTypeId: 13,
            name: "TV 1337-2",
        }, {
            id: 8,
            itemTypeId: 13,
            name: "TV 1337-3",
        }, {
            id: 9,
            itemTypeId: 13,
            name: "TV 1337-4",
        },
        {
            id: 10,
            itemTypeId: 87,
            name: "Bad Cake-2",
        },
        {
            id: 11,
            itemTypeId: 87,
            name: "Bad Cake-3",
        },
        {
            id: 12,
            itemTypeId: 87,
            name: "Bad Cake-4",
        },
        {
            id: 13,
            itemTypeId: 87,
            name: "Bad Cake-5",
        }
    ]
};

export function inventoryReducer(state = initialState, action: InventoryActionTypes): InventoryState {
    switch (action.type) {
        case ADD_NEW_ITEM_TO_INVENTORY:
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        case REMOVE_ITEM_FROM_INVENTORY:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }

        default:
            return state;
    }
}