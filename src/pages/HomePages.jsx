import { Container, Title, P, Link } from "./pagesStyled/HomePageStyled";

const HomePages = () => {
    return (
        <Container>
            <Title>Welcome to the Phonebook</Title>
            <P>Please <Link to='/login'>Log In</Link> or <Link to='/register'>Register</Link> </P>
        </Container>
    )
}

export default HomePages;