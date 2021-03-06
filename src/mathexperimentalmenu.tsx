import React from 'react';
import MenuHeader from './menuheader';

export function MathExperimentalMenu(props: any)
{
    return (
      <div className="editor-menu">
        <MenuHeader 
        name="math" 
        canClick={true}
        handleClick={props.returnToExperimental}
        />
        <div style={{padding: "10px 25px", borderBottom: "1px solid var(--jp-border-color2)"}}>
            <p>Auto-render LaTeX <br />in Markdown cells</p>
        </div>
        <div className={!props.enabled ? "jp-scribe-heading-menu-no-click" : "jp-scribe-heading-menu"}>
            <p 
            style={{padding: "10px 25px", borderBottom: "1px solid var(--jp-border-color2)"}}
            onClick={props.enabled ? props.handleClick : () => null}>Disable</p>
        </div>
        <div className={props.enabled ? "jp-scribe-heading-menu-no-click" : "jp-scribe-heading-menu"}>
            <p 
            style={{padding: "10px 25px", borderBottom: "1px solid var(--jp-border-color2)"}}
            onClick={!props.enabled ? props.handleClick : () => null}>Enable</p>
        </div>
      </div>  
    );
}