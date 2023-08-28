import '../css/yandexComments.scss'

function YandexComments(props) {
    return (
        <>
            <div className='slogan-yandex'>
                <div>
                    Посмотрите, что о нас говорят
                </div>
            </div>
            <div style={{backgroundColor:"#141313",padding:"0 5%"}}>
            <div style={{
                backgroundColor: '#141313', display: 'flex',
                alignItems:"center",justifyContent: 'center'
            }}>
                <div style={{width: '560px', height: '600px', overflow: 'hidden'}}>
                    {props.urls &&
                        <>
                            <iframe
                                title="YandexFrame"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    border: '1px solid #e6e6e6',
                                    borderRadius: '8px',
                                    boxSizing: 'border-box'
                                }}
                                src={props.urls[0]['url1']}
                            ></iframe>
                            <a href={props.urls[0]['url2']}
                               target="_blank"
                               rel="noopener noreferrer"
                               style={{
                                   boxSizing: 'border-box',
                                   textDecoration: 'none',
                                   color: '#b3b3b3',
                                   fontSize: '10px',
                                   fontFamily: 'YS Text,sans-serif',
                                   bottom: '8px',
                                   width: '100%',
                                   textAlign: 'center',
                                   left: '0',
                                   overflow: 'hidden',
                                   textOverflow: 'ellipsis',
                                   display: 'block',
                                   maxHeight: '14px',
                                   whiteSpace: 'nowrap',
                                   padding: '0 16px',
                               }}>
                            </a>
                        </>
                    }
                </div>
            </div>
        </div>
    </>
    )
}

export default YandexComments