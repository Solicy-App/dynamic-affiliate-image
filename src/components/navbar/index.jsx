import { Button, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

import "./index.css";

const Navbar = () => {
    const navigate = useNavigate();
    const postIds = [1, 2, 3];

    const linkHandler = (id) => {
        navigate({
            pathname: "/post",
            search: `?id=${id}`
        });
    }

    return (
        <div className='navbar'>
            <Stack spacing={4} direction='row' align='center'>
                {postIds.map(id =>
                    <Button colorScheme='teal' size='lg' onClick={() => linkHandler(id)}>
                        Link {id}
                    </Button>)}
            </Stack>
        </div>
    );
}

export default Navbar;
