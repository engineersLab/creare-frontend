import {useEffect} from 'react'
import $ from 'jquery'
import Link from 'next/link'
import { FaHome, FaBell, FaPuzzlePiece } from 'react-icons/fa'
import {MdOndemandVideo} from 'react-icons/md'
import {RiTimerLine} from 'react-icons/ri'
import {BsThreeDots} from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'
import { IconContext } from "react-icons"
import {DropdownButton, Dropdown} from 'react-bootstrap'
import {Tooltip} from '@material-ui/core'

const sidebarLogo = require('../public/assets/sideBarLogo.svg')

export default function sidebar({pageName}){

    useEffect(()=>{
        if(pageName == 'dashboard'){
            $('.sidebar-icon-1').addClass('sidebar-icon-active')
            $('.sidebar-icon-2').removeClass('sidebar-icon-active')
            $('.sidebar-icon-3').removeClass('sidebar-icon-active')
            $('.sidebar-icon-4').removeClass('sidebar-icon-active')
        }else if(pageName == 'video'){
            $('.sidebar-icon-2').addClass('sidebar-icon-active')
            $('.sidebar-icon-1').removeClass('sidebar-icon-active')
            $('.sidebar-icon-3').removeClass('sidebar-icon-active')
            $('.sidebar-icon-4').removeClass('sidebar-icon-active')
        }else if(pageName == 'remainder'){
            $('.sidebar-icon-3').addClass('sidebar-icon-active')
            $('.sidebar-icon-1').removeClass('sidebar-icon-active')
            $('.sidebar-icon-2').removeClass('sidebar-icon-active')
            $('.sidebar-icon-4').removeClass('sidebar-icon-active')
        }else if(pageName == 'notification'){
            $('.sidebar-icon-4').addClass('sidebar-icon-active')
            $('.sidebar-icon-3').removeClass('sidebar-icon-active')
            $('.sidebar-icon-2').removeClass('sidebar-icon-active')
            $('.sidebar-icon-1').removeClass('sidebar-icon-active')
        }
    })

    return(    
          
            <div className='wrapper'>
            <nav id='sidebar'>
                    <div style={{textAlign:'center',paddingTop:20}} >
                        <img src={sidebarLogo} className="img-fluid"/>
                    </div>
                    
                    <ul className='list_unstyled components' >
                        <Tooltip title='Dashboard' >
                            <li>
                                <div id="sidebar-text" style={{textAlign:'center',paddingTop:30}} >
                                    <Link href="/dashboard">
                                        <a>
                                            <IconContext.Provider  value={{ size:'2em' }}>
                                                <FaHome className='sidebar-icon-1 sidebar-icon-active' onClick={()=>{
                                                    $('.sidebar-icon-1').addClass('sidebar-icon-active')
                                                    $('.sidebar-icon-2').removeClass('sidebar-icon-active')
                                                    $('.sidebar-icon-3').removeClass('sidebar-icon-active')
                                                    $('.sidebar-icon-4').removeClass('sidebar-icon-active')
                                                }}
                                                />
                                            </IconContext.Provider>
                                        </a>
                                    </Link>
                                    <span>Home</span>
                                </div>
                            </li>
                        </Tooltip>
                        
                        <Tooltip title='Classroom' >
                            <li>
                                <div id="sidebar-text" style={{textAlign:'center',paddingTop:40}} >
                                    <Link href='/classroom'>
                                        <a>
                                            <IconContext.Provider value={{ size:'1.8em' }}>
                                                <MdOndemandVideo className='sidebar-icon-2' onClick={()=>{
                                                    $('.sidebar-icon-2').addClass('sidebar-icon-active')
                                                    $('.sidebar-icon-1').removeClass('sidebar-icon-active')
                                                    $('.sidebar-icon-3').removeClass('sidebar-icon-active')
                                                    $('.sidebar-icon-4').removeClass('sidebar-icon-active')
                                                }}/>
                                            </IconContext.Provider>
                                        </a>
                                    </Link>
                                    <span>Add Event</span>
                                </div>
                            </li>
                        </Tooltip>
                        
                        <Tooltip title='Remainder' >
                            <li>
                                <div id="sidebar-text" style={{textAlign:'center',paddingTop:40}} >
                                    <Link href='/remainder/dashboard'>
                                        <a>
                                        <IconContext.Provider value={{ size:'2em' }}>
                                            <RiTimerLine className='sidebar-icon-3' onClick={()=>{
                                                    $('.sidebar-icon-3').addClass('sidebar-icon-active')
                                                    $('.sidebar-icon-1').removeClass('sidebar-icon-active')
                                                    $('.sidebar-icon-2').removeClass('sidebar-icon-active')
                                                    $('.sidebar-icon-4').removeClass('sidebar-icon-active')
                                                }} />
                                        </IconContext.Provider>
                                        </a>
                                    </Link>
                                    <span>Remainder</span>
                                </div>
                            </li>
                        </Tooltip>
                       
                       <Tooltip title='Notification' >
                            <li>
                                <div id="sidebar-text" style={{textAlign:'center',paddingTop:40}} >
                                    <Link href="/notification">
                                        <a>
                                            <IconContext.Provider value={{ size:'1.5em' }}>
                                                <FaBell className='sidebar-icon-4' onClick={()=>{
                                                    $('.sidebar-icon-4').addClass('sidebar-icon-active')
                                                    $('.sidebar-icon-3').removeClass('sidebar-icon-active')
                                                    $('.sidebar-icon-2').removeClass('sidebar-icon-active')
                                                    $('.sidebar-icon-1').removeClass('sidebar-icon-active')
                                                }} />
                                            </IconContext.Provider>
                                        </a>
                                    </Link>
                                    <span>Notification</span>
                                </div>
                            </li>
                       </Tooltip>
                        
                        
                    </ul>
                    
                    <ul className='list_unstyled components ' style={{ position:'absolute', bottom:0}} >
                        <li>
                            <div id="sidebar-text" style={{textAlign:'center',paddingTop:40, marginLeft:10}} >
                                <a>
                                <IconContext.Provider value={{ color: "gray", size:'1.7em' }}>
                                    <FaPuzzlePiece />
                                </IconContext.Provider>
                                </a>
                                
                                <span>Puzzle</span>
                            </div>
                        </li>
                        <li>
                            <div id="sidebar-text" style={{textAlign:'center',paddingTop:30, marginLeft:10}} >
                                <DropdownButton
                                    variant='light'
                                    drop='up'
                                    title={<IconContext.Provider value={{ color: "gray", size:'1.7em' }}>
                                    <BsThreeDots />
                                </IconContext.Provider>
                                    }
                                >
                                    <Dropdown.Item eventKey="1" >Q/A Forum</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Report</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </li>
                        <li>
                            <div id="sidebar-text" style={{textAlign:'center',paddingTop:30, marginLeft:10}} >
                                <IconContext.Provider value={{ color: "gray", size:'3em' }}>
                                    <GoPrimitiveDot />
                                </IconContext.Provider>
                                <span>Profile</span>
                            </div>
                        </li>
                    </ul>  
                </nav>   
                <div id='content' >
                    <nav className='navbar navbar-expand-lg navbar-light'>
                        <div  className='sidebar-content'>
                            <div className='container-fluid'>
                                <button type='button' id='sidebarCollapse' className='btn btn-info' onClick={()=>$("#sidebar").toggleClass('active')}>
                                    <i className='fas fa-align-left'></i>
                                </button>        
                            </div>
                        </div>
                    </nav>
                </div>  
            </div>        
    )
}
