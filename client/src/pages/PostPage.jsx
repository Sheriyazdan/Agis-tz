import React from "react";
import { useState, useEffect } from "react";
import { api } from "../utils";

const EditModal = ({ saveItem, closeModal, textInput, itemIndex }) => {
  const [changeInput, setChangeInput] = useState("");

  const save = () => {
    const updatedPost = {
      text: changeInput,
      id: itemIndex,
    };
    api.put(`/posts/${itemIndex}`, updatedPost).then((res) => {
      saveItem(changeInput);
      closeModal();
    });
  };
  return (
    <div className="edit-modal">
      <div className="modal-block">
        <img onClick={closeModal} className="close" src="icons/x-btn.png" />
        <input
          className="edit-input"
          type="text"
          defaultValue={textInput}
          onChange={(e) => setChangeInput(e.target.value)}
        />
        <button className="btn-main banner_btn send" onClick={() => save()}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

function PostPage() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [itemIndex, setItemIndex] = useState(null);
  const [checkSaveItem, setCheckSaveItem] = useState('')
  const saveItem = (text) => {
    setCheckSaveItem(text)
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  const clickToEdit = (text, index) => {
    setTextInput(text);
    setOpenModal(!openModal);
    setItemIndex(index);
  };

  const submit = () => {
    const data = {
      text: text,
    };
    api
      .post("/posts/createpost", data)
      .then((res) => setMessages([...messages, res.data.newPost]))
      .catch((err) => console.log(err));
  };

  const deleteItem = (index) => {
    api
      .delete(`/posts/${index}`, index)
      .then((res) =>
        document.querySelectorAll(".comments .comment-item")[index].style.display = "none"
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get("/posts");
      setMessages(data.allPosts);
    };
    fetchData();
  }, [checkSaveItem]);
  return (
    <div className="posts">
      <div className="container">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <h1>Все коментарий</h1>
          <div className="comments">
            {messages.length ? (
              <>
                {messages.map((item, index) => {
                  return (
                    <div className="comment-item" key={index}>
                      <span>{item.text}</span>
                      <div className="items">
                        <img
                          className="edit"
                          onClick={() => {
                            clickToEdit(item.text, index);
                          }}
                          src="icons/edit-pencil.png"
                          alt=""
                        />{" "}
                        <img
                          className="delete"
                          onClick={() => {
                            deleteItem(index);
                          }}
                          src="icons/x-btn.png"
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <><img src="images/loader.png" alt="" /></>
            )}
          </div>
          <input
            type="text"
            placeholder="Добавить коментарий"
            className="add_post"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button className="btn-main banner_btn send" onClick={() => submit()}>
            Отправить
          </button>
        </form>
      </div>
      {openModal && (
        <EditModal
          saveItem={saveItem}
          itemIndex={itemIndex}
          textInput={textInput}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default PostPage;
