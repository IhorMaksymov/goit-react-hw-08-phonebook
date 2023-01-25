import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Section from "components/Section";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";

import { Container, Wrapp } from "./pagesStyled/ContactsStuled";

import { fetchContacts } from "redux/contacts/contactsOperation";

const Contacts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])
    return (
        <Container>
            <div>
                <Section title={'Phonebook'}>
                <ContactForm />
            </Section>
            </div>
            <Wrapp>
                <Section title={'Contacts'}>
                <Filter />
                <ContactList />
            </Section>
            </Wrapp>
        </Container>
    )
}

export default Contacts;