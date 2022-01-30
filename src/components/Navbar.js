import styled from 'styled-components';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#ececec', padding: '10px 25px' }}>
            <ul
                style={{
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <li>
                    <a
                        style={{ color: 'teal', textDecoration: 'none' }}
                        href='#'
                    >
                        HOME
                    </a>
                </li>
                <li>
                    <a
                        style={{ color: 'teal', textDecoration: 'none' }}
                        href='#'
                    >
                        HOME
                    </a>
                </li>
                <li>
                    <a
                        style={{ color: 'teal', textDecoration: 'none' }}
                        href='#'
                    >
                        HOME
                    </a>
                </li>
                <li>
                    <a
                        style={{ color: 'teal', textDecoration: 'none' }}
                        href='#'
                    >
                        HOME
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
