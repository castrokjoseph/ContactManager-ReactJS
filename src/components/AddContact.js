import React from "react";

class AddContact extends React.Component{
state={
    name:"",
    phone:"",
    email:"",
};
add=(e)=>{
    e.preventDefault();
    if(this.state.name === "" && this.state.phone === "" &&this.state.email===""){
        alert("All the fields are MANDATORY!");
        return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name: "", phone: "", email: ""});
    
}

    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input  type="text" name="name" placeholder="Name"
                        value={this.state.name} 
                        onChange={(e)=> this.setState({name:e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Phone</label>
                        <input  type="number" name="phone" placeholder="Phone Number" 
                        value={this.state.phone} 
                        onChange={(e)=> this.setState({phone:e.target.value})}/>
                        
                    </div>
                    <div className="field">
                        <label>E-mail</label>
                        <input  type="text" name="email" placeholder="E-mail" 
                        value={this.state.email} 
                        onChange={(e)=> this.setState({email:e.target.value})}/>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }

};
export default AddContact;