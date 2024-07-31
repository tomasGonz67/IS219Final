export default function MailChimp() {
    return (
        <div id="mc_embed_shell">
            <div id="mc_embed_signup">
                <form
                    action="https://njit.us14.list-manage.com/subscribe/post?u=26482de074b2bcbd341e1c09f&amp;id=61cda848da&amp;f_id=00fbd5e0f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_self"
                    noValidate
                >
                    <div id="mc_embed_signup_scroll">
                        <h2>SIGN UP NOW</h2>
                        <div className="indicates-required">
                            <span className="asterisk">*</span> indicates required
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                            <input
                                type="email"
                                name="EMAIL"
                                className="required email"
                                id="mce-EMAIL"
                                required
                                value=""
                            />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">First Name</label>
                            <input
                                type="text"
                                name="FNAME"
                                className="text"
                                id="mce-FNAME"
                                value=""
                            />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-LNAME">Last Name</label>
                            <input
                                type="text"
                                name="LNAME"
                                className="text"
                                id="mce-LNAME"
                                value=""
                            />
                        </div>
                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                        </div>
                        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                            <input
                                type="text"
                                name="b_26482de074b2bcbd341e1c09f_61cda848da"
                                tabIndex="-1"
                                value=""
                            />
                        </div>
                        <div className="optionalParent">
                            <div className="clear foot">
                                <input
                                    type="submit"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="button"
                                    value="Subscribe"
                                />
                                <p style={{ margin: '0px auto' }}>
                                    <a href="http://eepurl.com/iU3Mu6" title="Mailchimp - email marketing made easy and fun">
                                        <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                                        </span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
