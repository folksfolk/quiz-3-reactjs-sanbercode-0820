import React, {Component} from 'react';
 
class Login  extends Component {
    
    render() { 
        return (
            <div className="container">
                <div style={{padding: "10px", border: "1px solid #1273de", backgroundColor: "#1273de"}}>
                    <div className="row justify-content-center">
                            <div className="col-md-6">
                            <h2 style={{textAlign: "center"}}>Login Sistem</h2>
                                <form>
                                <table cellspacing="4" cellpadding="4">
                                    <tr>
                                        <td><strong><label for="email">Username </label></strong></td>
                                        <td><input type="email" className="form-control" placeholder="Masukan username anda"  required/></td>
                                    </tr>
                                    <tr>
                                        <td><strong><label for="password">Password</label></strong></td>
                                        <td><input type="password" className="form-control" placeholder="Password" /></td>
                                    </tr>
                                    <tr>
                                        <td><button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button></td>
                                    </tr>
                                </table>
                                </form>
                            </div>
                    </div>
                </div>
            </div> 
         );
    }
}
 
export default Login 