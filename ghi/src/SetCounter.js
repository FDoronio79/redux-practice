export default function SetCounter() {
    return (
        <section className="controls">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <label htmlFor="set-to">Set Count</label>
                <input id="set-to" type="number"/>
                <input type="submit"/>
            </form>
        </section>
    )
}