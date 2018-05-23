// @flow
import Button from './button';
import removeCity from './remove';

export default function createRemoveButton() {
	const removeButton = new Button('remove', () => {
		removeCity(removeButton);
	}).create('removeBtn');
	return removeButton;
}
