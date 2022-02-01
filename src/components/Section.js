const Section = () => {
    return (
        <section
            style={{
                margin: '5px',
                height: '95px',
                padding: '5px',
                border: '1px solid #EE2B47',
            }}
        >
            <div
                style={{
                    border: '1px solid #EE2B47',
                    margin: '5px',
                }}
            >
                <div
                    style={{
                        margin: '5px',
                        border: '1px solid #EE2B47',
                    }}
                >
                    <h2 style={{ color: '#EE2B47' }}>제목</h2>
                </div>
                <div style={{ margin: '5px', border: '1px solid #EE2B47' }}>
                    <p style={{ color: '#EE2B47' }}>내용</p>
                </div>
            </div>
        </section>
    );
};

export default Section;
