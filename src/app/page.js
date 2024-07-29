// src/app/subscribe/page.js

import Script from 'next/script';

export default function Subscribe() {
    return (
        <main>
            <div id="mc_embed_shell">
                <style type="text/css">
                    {`
            #mc_embed_signup {
              background: #fff;
              clear: left;
              font: 14px Helvetica, Arial, sans-serif;
              width: 600px;
            }
          `}
                </style>
                <div id="mc_embed_signup">
                    <form
                        action="https://njit.us14.list-manage.com/subscribe/post?u=26482de074b2bcbd341e1c09f&amp;id=61cda848da&amp;f_id=00fbd5e0f0"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_blank"
                    >
                        <div id="mc_embed_signup_scroll">
                            <h2>Subscribe</h2>
                            <div className="indicates-required">
                                <span className="asterisk">*</span> indicates required
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-EMAIL">
                                    Email Address <span className="asterisk">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="EMAIL"
                                    className="required email"
                                    id="mce-EMAIL"
                                    required
                                />
                            </div>
                            <div id="mce-responses" className="clear foot">
                                <div
                                    className="response"
                                    id="mce-error-response"
                                    style={{ display: 'none' }}
                                ></div>
                                <div
                                    className="response"
                                    id="mce-success-response"
                                    style={{ display: 'none' }}
                                ></div>
                            </div>
                            <div
                                aria-hidden="true"
                                style={{ position: 'absolute', left: '-5000px' }}
                            >
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
                                        <a
                                            href="http://eepurl.com/iU3Mu6"
                                            title="Mailchimp - email marketing made easy and fun"
                                        >
                                            <span
                                                style={{
                                                    display: 'inline-block',
                                                    backgroundColor: 'transparent',
                                                    borderRadius: '4px',
                                                }}
                                            >
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <Script
                    src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
                    strategy="afterInteractive"
                />
            </div>
        </main>
    );
}
