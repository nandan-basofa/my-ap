type personListProps = {
  person: {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
  }[];
};

export function PersonList(props: personListProps) {
  return (
    <div>
      {props.person.map((person) =>
        person.isLoggedIn ? (
          <h1>
            Hello {person.name} you have {person.messageCount} unread messages
          </h1>
        ) : (
          <h1>Mr.{person.name} Login to see your messages</h1>
        )
      )}
    </div>
  );
}
