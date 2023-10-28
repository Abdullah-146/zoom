import React, { useEffect } from 'react'
import { ThreeCircles } from 'react-loader-spinner'

function RemotePeerStream(props) {

    useEffect(() => {
        if(props.src){
            document.getElementById(`remotePeer-${props.userId}`).srcObject = props.src;
            document.getElementById(`remotePeer-${props.userId}`).style.transform = 'scaleX(-1)';
        }
    }, [props.src])

    return (
        <div style={props.style} className='flex flex-1 relative'>
            <video style={{
                    width: '100%', height: '100%', objectFit: 'cover'
            }} id={`remotePeer-${props.userId}`} autoPlay className='object-cover bg-black' />
            {
                props.name &&
                <p className='absolute bottom-0 left-0 right-0 text-white text-lg text-center bg-black bg-opacity-50'>{props.name}</p>
            }
            {
                props.loading &&
                <ThreeCircles
                    height={50}
                    width={50}
                    color="#ffffff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                />

            }
        </div>
    )
}

export default RemotePeerStream