import React from 'react'

export default  () => {
  return(
    <div         style={{marginTop: '180px', marginBottom: '20px'}}>
        <hr style={{ marginLeft: '2%', marginRight: '2%'}}/>
        <div style={{ width: '100%', marginBottom: '10px', height: '25px'}}>
            <div style={{display: 'inline-block', float: 'left', marginLeft: '5%'}}>
                &copy; {new Date().getFullYear()} WizCounsel
            </div>
            <div style={{float: 'right', display: 'inline-block', marginRight: '5%', width: '15%'}}>
                <div style={{display: 'inline-block', float: 'left'}}>
                    Terms of use
                </div>
                <div style={{display: 'inline-block', float: 'right' }}>
                    Privacy
                </div>
            </div>
        </div>
    </div>
  )
}