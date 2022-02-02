const Section = () => {
    return (
        <section
            style={{
                margin: '15px 5px',
                height: '95px',
                padding: '5px',
                border: '1px solid #F7FD04',
            }}
        >
            <div
                style={{
                    border: '1px solid #EE2B47',
                }}
            >
                <div
                    style={{
                        paddingLeft: '10px',
                        margin: '5px',
                        border: '1px solid #EE2B47',
                    }}
                >
                    <h2 style={{ color: '#EE2B47' }}>T I T L E</h2>
                </div>
                <div
                    style={{
                        paddingLeft: '10px',
                        margin: '5px',
                        border: '1px solid #EE2B47',
                    }}
                >
                    <p style={{ color: '#EE2B47' }}>C O N T E N T</p>
                </div>
            </div>
        </section>
    );
};

export default Section;
