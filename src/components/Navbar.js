import styled from 'styled-components';

const Navbar = () => {
    return (
        <div
            style={{
                display: 'flex',
                color: '#FE7E6D',
                border: '1px solid #FE7E6D',
                margin: '5px',
                padding: '5px ',
                textAlign: 'center',
            }}
        >
            <h1
                style={{
                    border: '1px solid #FE7E6D',
                    padding: '15px 0',
                    width: '80px',
                    fontSize: '1.3rem',
                }}
            >
                로 고
            </h1>
            <ul
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    border: '1px solid #FE7E6D',
                    width: '70%',
                    marginLeft: '5px',
                    fontSize: '1.5rem',
                }}
            >
                <li>
                    <a href='#'>메뉴 1</a>
                </li>
                <li>
                    <a href='#'>메뉴 2</a>
                </li>
                <li>
                    <a href='#'>메뉴 3</a>
                </li>
                <li>
                    <a href='#'>메뉴 4</a>
                </li>
            </ul>
            <div
                style={{
                    width: '30%',
                    border: '1px solid #FE7E6D',
                }}
            >
                <div
                    style={{
                        border: '1px solid #FE7E6D',
                        margin: '5px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <button
                        style={{
                            width: '150px',
                            height: '50px',
                            marginRight: '10px',
                        }}
                    >
                        버튼 1
                    </button>
                    <button style={{ width: '150px', height: '50px' }}>
                        버튼 2
                    </button>
                </div>
            </div>
            <div
                style={{
                    width: '80px',
                    border: '1px solid #FE7E6D',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h3
                    style={{
                        border: '1px solid #FE7E6D',
                        padding: '5px 5px',
                    }}
                >
                    네모
                </h3>
            </div>
        </div>
    );
};

export default Navbar;
