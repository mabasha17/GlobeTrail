import React from 'react'
import ChatBox from './_components/chatBox';

function CreateNewTrip() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-10' >
        <div>
            {/* Chat Box Component */}
            <ChatBox />
        </div>
        <div>
            Map and trip to display
        </div>
    </div>
  )
}

export default CreateNewTrip