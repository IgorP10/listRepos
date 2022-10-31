import {
    Container,
    ProfilePicture
} from './styles';

const UserPicture = props => (
    <Container>
        <ProfilePicture src={props.url} alt="igorP10" />
    </Container>
);

export default UserPicture;