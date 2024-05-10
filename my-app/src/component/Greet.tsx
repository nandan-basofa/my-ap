type propType = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export function Greet(props: propType) {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Hello ${props.name} you have ${props.messageCount} unread messages`
          : `Login to see your messages`}
      </h2>
    </div>
  );
}
