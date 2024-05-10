type personprops = {
  firstname: string;
  lastname: string;
};

export function Person(props: personprops) {
  return (
    <h1>
      {props.firstname}
      <span> </span>
      {props.lastname}
    </h1>
  );
}
