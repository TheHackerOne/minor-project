import React,{useState} from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';
import {v4 as uuidv4} from 'uuid'
import { database,storage } from '../firebase';

function UploadFile(props) {
    console.log(props.user);
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);

    const handleChange = async(file) => {
        if(file==null){
            setError("Please select a file first");
            setTimeout(()=>{
                setError('')
            },2000)
            return;
        }
        if(file.size/(1024*1024)>100){
            setError('This video is very big');
            setTimeout(()=>{
                setError('')
            },2000);
            return;
        }
        let uid = uuidv4();
        setLoading(true);
        const uploadTask = storage.ref(`/posts/${uid}/${file.name}`).put(file);
            uploadTask.on('state_changed',fn1,fn2,fn3);
            function fn1(snapshot){
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
                console.log(`Upload is ${progress} done.`)
            }
            function fn2(error){
                setError(error);
                setTimeout(()=>{
                    setError('')
                },2000);
                setLoading(false)
                return;
            }
            function fn3(){
                uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                     console.log(url);
                     let imgElement = document.getElementById('upload-img');
                     imgElement.setAttribute('src',url)
                    }).then(()=>{
                        setLoading(false)
                    }).catch((err)=>{
                        setError(err)
                        setTimeout(()=>{
                            setError('')
                        },2000)
                        setLoading(false)
                    })
                }
            }

    return (
        <div style={{marginTop:'5rem',marginBottom:'1rem'}}>
            {
                error!=''?<Alert severity="error">{error}</Alert>:
                <div style={{ display:"flex", flexDirection:'column',justifyContent:'center', alignItems:'center' }}>
                    <img src='' id='upload-img' style={{ width: '30rem', height: 'auto', display:'block' }}/>
                    <input type="file" onChange={(e)=>handleChange(e.target.files[0])} id="upload-input" style={{display:'none'}} />
                    <label htmlFor="upload-input">
                        <Button
                            variant="outlined"
                            color="secondary"
                            component="span"
                            disabled={loading}
                            style={{display:"block", width:"13rem", marginTop:'3rem'}}
                        >
                        <MovieIcon/>&nbsp;Upload Image
                        </Button>
                    </label>
                    {loading && <LinearProgress color="secondary" style={{marginTop:'3%'}} />}
                </div>
            }
        </div>
    )
}

export default UploadFile