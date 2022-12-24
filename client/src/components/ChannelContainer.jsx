import React from 'react';
import { Channel, useChatContext } from 'stream-chat-react';

import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from './';

const ChannelContainer = (
  { isCreating, setIsCreating, isEditing, setIsEditing, createType, }
) => {
  const { channel } = useChatContext();

  if(isCreating){
    return (
          <div className='channel__conatainer'>
              <createChannel createType={createType} setIsCreating={setIsCreating} />
          </div>
    )
  }

  if(isEditing) {
    return(
      <div className='channel__conatainer'>
      <EditChannel setIsEditing={setIsEditing} />
  </div>
    )
  }

  const EmptyState = () => (
       <div className='channel-empty_conatiner'>
           <p className='channel-empty__first'>This is the start of your chat history</p>
           <p className='channel-empty__second'>Here you can send messages, emojis, links attachments and more!</p>
       </div>
  )

  return (
    <div className='channel_container'>
      <Channel
          EmptyStateIndicator={EmptyState}
          Message={(messageProps, i) => <TeamMessage key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  );
}

export default ChannelContainer;
