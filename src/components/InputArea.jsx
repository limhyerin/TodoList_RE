import Button from "./Button";

const InputArea = ({valueTitle, onChangeTitle, valueBody, onChangeBody, clickAddHandler}) => {
    return <div className="inputTodo">
                <div className="inputTitle">
                    <p>
                        <strong>제목 : &nbsp;</strong>
                        <input value={valueTitle} onChange={onChangeTitle}/>
                    </p>
                </div>
                <div className="inputContent">
                    <p>
                        <strong>내용 : &nbsp;</strong>
                        <input value={valueBody} onChange={onChangeBody}/>
                    </p>
                </div>
                    <div className="plusButton">
                        <Button clickAddHandler={clickAddHandler} children="추가하기" />
                    </div>
            </div>;
}

export default InputArea;

