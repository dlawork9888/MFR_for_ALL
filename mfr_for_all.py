import streamlit as st
import base64

# image to base64
def get_image_base64(path):
    with open(path, "rb") as img_file:
        return base64.b64encode(img_file.read()).decode('utf-8')

# background color => CSS
def set_bg_color():
    st.markdown(
        f"""
        <style>
        .stApp {{
            background-color: #000000;
        }}
        </style>
        """,
        unsafe_allow_html=True
    )

set_bg_color()


# images
logo_path = get_image_base64('images/MFRforALLLogo.png')
coming_soon_path = get_image_base64('images/comingsoon.png')
st.markdown(
    f"""
    <div style = "display: flex; flex-direction:column; justify-content: center; align-items: center; height:100vh;">
        <img width=40% src="data:image/png;base64,{logo_path}">
        <img width=40% src="data:image/png;base64,{coming_soon_path}">
    </div>
    """,
    unsafe_allow_html=True
    #  div_test => background-color:#FFFFFF;
)



