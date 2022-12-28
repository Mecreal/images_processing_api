const styles = `
<style>  
    .global{
        display: block-flex;
        align-items: center;
        justify-content: center;
    }
    h1, p,h2,h3{
        font-family: "tahoma";
        text-align: center;
    }
    h1,h2{
        color:blue;
    }
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        width:92%;
        max-width:300px;
        margin:10px;
    }

    .text_cont {
        text-align: center;
        padding: 10px 0px;  
    }
    img{
        vertical-align: middle;
        width: 100%;
        opacity: 0.85;
    }
    .break {
        flex-basis: 100%;
        height: 0;
    }
    h3{
        
    }
</style>`;

export default styles;
