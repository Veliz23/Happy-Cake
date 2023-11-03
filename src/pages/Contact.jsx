export default function Contact() {
    return(
        <>
            <div className="container w-50 pt-5">
                <h2 className="text-center mb-5">Let's tell you, how can we help you?</h2>
                <div className="container bg-success px-2 py-3">
                    <form action="">
                        <p className="h4">Email</p>
                        <input type="text" size="70"/>
                        <p className="h4">Description</p>
                        <textarea name="descripcion" id="" cols="73" rows="5"></textarea>
                    </form>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary mt-3 ">Send</button>
                </div>
            </div>

        </>
    )
};
