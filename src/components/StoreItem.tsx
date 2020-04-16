import * as React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Item } from '../store/inventory/types';
import { addItemToInventory, removeItemFromInventory } from '../store/inventory/actions';
import { addItemToCart, removeItemFromCart } from '../store/cart/actions'
import { RootState } from '../store';
import { connect } from 'react-redux';

export interface IStoreItemProps {
    itemId: number;
    items: Item[];
    addItemToInventory: typeof addItemToInventory;
    removeItemFromInventory: typeof removeItemFromInventory;
    addItemToCart: typeof addItemToCart;
    removeItemFromCart: typeof removeItemFromCart;
}

export class StoreItem extends React.Component<IStoreItemProps> {
    onClickAddItemToCart() {
        let { itemId } = this.props;

        this.props.removeItemFromInventory(itemId);
        this.props.addItemToCart(itemId);
    }

    public render() {
        let { items, itemId } = this.props;
        //Look carefully at this... 
        //I filter the list based on items that match the item Id.
        //Item ID should be unique to one particular item. So I take off the first element in this
        //particular array that I've filtered and put it into the variable "itemOfConcern".
        let itemOfConcern = items.filter(individualItem => (individualItem.id === itemId))[0];
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{itemOfConcern.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Item Type: {itemOfConcern.itemTypeId}</span>
                    </Card.Meta>
                    <Card.Description>
                        And item Id: {itemOfConcern.id}
                    </Card.Description>
                    <Card.Group>
                        <Button
                            content="Add Item To Cart"
                            onClick={() => this.onClickAddItemToCart()}
                        />
                    </Card.Group>
                </Card.Content>
            </Card>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        items: state.inventory.items,
    };
}

export default connect(
    mapStateToProps, //bring in the mapStateToProps function to inform redux of what you want to bring in and how to bring it in (to props)
    { addItemToInventory, removeItemFromInventory, addItemToCart, removeItemFromCart } //bring in specific actions into this component
)(StoreItem);