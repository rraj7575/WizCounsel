import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MediaQuery from  'react-responsive'
const images = ['image1', 'image2', 'image3', 'image4']

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 253,
    },
    menu: {
        width: 200,
    },
});

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
            imageIndex: 0,
            signUp: true,
            windowWidth: 1500
        }

    }

    componentDidMount() {
       this.displayImage =  setInterval(() => this.changeImage(), 2000)
        window.addEventListener('resize', this.resize)
    }
    resize = () => {
            this.setState({windowWidth: window.innerWidth })
    }

    componentWillUnmount() {
        clearTimeout(this.displayImage)
    }

    onSubmit = (e) => {
        e.preventDefault()
        const {firstName, lastName, email, password, phone} = this.state
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            password: password,
        }
        console.log(newUser)
    }

    changeImage = () => {
        let imageIndex = this.state.imageIndex
        if (this.state.imageIndex < images.length - 1) {
            imageIndex += 1
        } else {
            imageIndex = 0
        }
        this.setState({imageIndex})
    }

    onChangeInput = event => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    textField = (value, label, id, width, type='text') => (
        <TextField
            style={{width: width}}
            id={id}
            label={label}
            type={type}
            className={this.props.classes.textField}
            value={value}
            onChange={(e) => this.onChangeInput(e)}
            margin="normal"
        />
    )
    changeMode = () => {
        this.setState({signUp: !this.state.signUp, imageIndex: 0})
    }

    render() {
        const {firstName, lastName, email, password, phone, imageIndex, signUp, windowWidth} = this.state
        const {classes} = this.props;
        const logInOrSignUp = signUp ? 'LOGIN': 'SIGN UP'
        const submitButton = signUp ? 'Get Started': 'SIGN IN'
        const signInSignUpinfoText = signUp ? 'Already have a account?' : 'Don not have an account?'
        const signInSignUpHeader = signUp ? 'Let\'s find you whizard professional.' : 'Sign in to WhizCouncel.'
        return (
            <div style={{paddingTop: '36px'}}>
                <div style={{marginBottom: '25px'}}>
                    <div style={{display: 'inline-block', float: 'right', marginRight: '-40px'}}>
                        <Button style={{color: 'white', background: 'black'}} onClick={this.changeMode}>{logInOrSignUp}</Button>
                    </div>
                    <div style={{display: 'inline-block', float: 'right', marginRight: '2%', marginTop: '.5%', color:'#7d8082', letterSpacing: '1px', fontSize: '18px' }}>{signInSignUpinfoText}</div>
                </div>
                <br/>
                <hr style={{marginBottom: '30px', marginLeft: '15%', width: '90%', color: 'black'}}/>
                <div style={{display: 'flex'}}>
                    <div style={{flexGrow: '1', marginLeft: '-21px'}}>
                        <img src={images[imageIndex] + '.jpeg'} style={{width: '450px', height: '570px'}}/>
                        <div style={{
                            width: '400px',
                            height: '500px',
                            position: 'absolute',
                            top: '77%',
                            left: '7%',
                            whiteSpace: 'normal',
                            display: 'inline-block',
                            fontSize: '45px',
                            color: 'white',
                            textAlign: 'left'
                        }}>

                            BEST LAWYERS TO LEAD YOUR CASE.
                        </div>
                    </div>
                    <div style={{marginLeft: signUp ? '6%': '15.5%'}}>
                        <div style={{display: 'inline', width: signUp ? '80%': '101%', float: 'left', marginLeft: signUp ? '4%': '-16%'}}>
                            <div style={{textAlign: 'left', fontSize: '48px', marginTop: '-3%'}}>
                                {signInSignUpHeader}
                            </div>
                            {!signUp && (
                                <div style={{float: 'left', fontSize: '20px', fontFamily: 'proxima-nova', letterSpacing: '1px' }}>
                                    Enter your details below
                                </div>
                            )}
                        </div>

                        {signUp && (
                            <div>
                                <div style={{display: 'inline-block', float: 'left', width: '100%'}}>
                                    {this.textField(firstName, 'First Name', 'firstName', windowWidth <= 1000 ? '91%': '44%')}
                                    {this.textField(lastName, 'Last Name', 'lastName', windowWidth <= 1000 ? '91%': '44.5%')}
                                </div>
                                <div>
                                    {this.textField(phone, 'Mobile', 'phone', '91%', 'number')}
                                </div>
                            </div>
                        )
                        }
                        <div style={{background: 'white', marginLeft: signUp ? '0%': '-20%'}}>
                            {this.textField(email, 'Email', 'email', '91%')}
                        </div>
                        <div style={{background: 'white', marginLeft: signUp ? '0%': '-20%'}}>
                            <div style={{float: 'left', width: '100%', display: 'inline-block'}}>
                                {this.textField(password, 'Password', 'password', '91%', 'password')}
                            </div>
                            {!signUp && (<div style={{display: 'inline-block', float: 'right', width: '29%', cursor: 'pointer'}}>Forget password?</div>)}
                        </div>
                        <div>
                            <Button variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    style={{marginTop: '7%'}}
                                    onClick={this.onSubmit}
                            >
                                {submitButton}
                            </Button>
                        </div>
                        {signUp && (
                            <div style={{marginTop: '5%', fontSize: '20px'}}>
                                <div style={{color: '#696969'}}>
                                    By clicking here you agree to our:
                                </div>
                                <div>
                                    Terms of use & Privacy policy
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div style={{width: '60%', display: 'inline-block', marginTop: '5%', float: 'right' }}>
                    <div style={{display: 'inline-block' ,textAlign: 'left', width: '52%', float: 'left' }}>
                        <div style={{display: 'flex'}}>
                            <div style={{display: 'inline-block', width: '10%', marginRight: '5%'}}>
                                <img src="safeAndSecure.png" style={{width: '40px', height: '40px', display: 'inline-block'}}/>
                            </div>
                            <div style={{display: 'inline-block'}}>
                                <div style={{fontSize: '20px', display: 'inline-block'}}>
                                    Safe & Secure
                                </div>
                                <div>
                                    Your confidential information is encrypted to remain private, safe, and secure.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'inline-block', textAlign: 'left', float: 'right', width: '48%'}}>
                        <div style={{display: 'flex'}}>
                            <div style={{display: 'inline-block', width: '10%', marginRight: '5%'}}>
                                <img src="verified.png" style={{width: '40px', height: '40px', display: 'inline-block'}}/>
                            </div>
                            <div style={{display: 'inline-block'}}>
                                <div style={{fontSize: '20px', display: 'inline-block'}}>
                                    Verified Professionals
                                </div>
                                <div>
                                    Our lawyers are verified and approved through our screening process.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Register)