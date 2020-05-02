import React, { useState, useEffect } from 'react';
import { InputGroup, InputGroupAddon, Input, Button, Alert } from 'reactstrap';

const PublicChat = () => {
	const [ joined, setJoined ] = useState(false);

	return !joined ? (
		<InputGroup size="sm">
			<Input />
			<InputGroupAddon addonType="append">
				<Button
					color="success"
					onClick={() => {
						setJoined(!joined);
					}}
				>
					Join chat
				</Button>
			</InputGroupAddon>
		</InputGroup>
	) : (
		<div className="public-chat">
			<div className="chat-box">
				<div className="chat-content">
					<h3>Room Public Chat</h3>
					<Alert size="sm" color="light">
						This is a secondary alert — check it out!
					</Alert>
					<Alert color="light">This is a warning alert — check it out!</Alert>
					<Alert color="info">This is a info alert — check it out!</Alert>
					<Alert size="sm" color="light">
						This is a secondary alert — check it out!
					</Alert>
					<Alert color="light">This is a warning alert — check it out!</Alert>
					<Alert size="sm" color="light">
						This is a secondary alert — check it out!
					</Alert>
					<Alert color="light">This is a warning alert — check it out!</Alert>
					<Alert size="sm" color="light">
						This is a secondary alert — check it out!
					</Alert>
					<Alert color="light">This is a warning alert — check it out!</Alert>
					<Alert color="info">This is a info alert — check it out!</Alert>
					<Alert size="sm" color="light">
						This is a secondary alert — check it out!
					</Alert>
					<Alert color="light">This is a warning alert — check it out!</Alert>
					<Alert size="sm" color="light">
						This is a secondary alert — check it out!
					</Alert>
				</div>
				<div className="input-chat">
					<InputGroup size='lg'>
						<Input />
						<InputGroupAddon addonType="append">
							<Button
								color="primary"
								onClick={() => {
									setJoined(!joined);
								}}
							>
								Send
							</Button>
						</InputGroupAddon>
					</InputGroup>
				</div>
			</div>
			<div className="users-online">
				<h3>Online users</h3>
				<div className="list-user-online">
					<div className="user-item">khanh</div>
					<div className="user-item">thu</div>
				</div>
			</div>
		</div>
	);
};
export default PublicChat;
