import { useDispatch } from 'react-redux';

import { Label, Input } from './FilterStyled';
import { valueContactFilter } from 'redux/contacts/contactsSlice';

const Filter = () => {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const filter = event.target.value;
        dispatch(valueContactFilter(filter));
    }

    return (
        <Label>
            Find contacts by name
            <Input type='text' onChange={handleChange} />
        </Label>
    )
}

export default Filter;