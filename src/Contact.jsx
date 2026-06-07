export default function Contact(props) {
    return (
        <>
            <label>
                First Name:
                <input type="text" onChange={(e) => {props.handleContactField("firstName", e.target.value)}}/>
            </label>
            <label>
                Last Name:
                <input type="text" onChange={(e) => {props.handleContactField("lastName", e.target.value)}}/>
            </label>
        </>
    )
}