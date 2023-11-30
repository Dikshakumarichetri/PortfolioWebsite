import { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";

export const NewsLetter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);
 
  const clearFields = () => {
    setEmail("");
  };
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp" id="subscribe">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h2>Subscribe to our newsletter for more information</h2>

            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col xs={12} md={12} xl={7}>
            {/* <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form> */}

            <div id="mc_embed_shell">
              <link
                href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
                rel="stylesheet"
                type="text/css"
              />
              <style type="text/css">
                {`
          #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
             We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        `}
              </style>
              {/* <div className="new-email-bx"> */}
              <form
                action="https://gmail.us9.list-manage.com/subscribe/post?u=cf143107bca6d41e4cc76af6d&amp;id=dba6f8cb84&amp;f_id=00d7c1e0f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
              >
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="new-email-bx">
                  {/* <input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                  /> */}
                  <input
                        type="email"
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL"
                        required=""
                        value={email}
                        placeholder="Email Address"

                        onChange={(e) => setEmail(e.target.value)}
                      />

                  <span
                    id="mce-EMAIL-HELPERTEXT"
                    className="helper_text"
                  ></span>
                  <button type="submit" name="subscribe">
                    Submit
                  </button>
                </div>
                <div id="mce-responses" className="clear foot">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>
              </form>
              {/* </div> */}
              <script
                type="text/javascript"
                src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
              ></script>
              <script type="text/javascript">
                {`
          (function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';
          }(jQuery));
          var $mcj = jQuery.noConflict(true);
        `}
              </script>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
