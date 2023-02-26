React Hook Customizing by following this course.
https://nomadcoders.co/react-hooks-introduction/lectures/1591

## 훅에 대해 알아보기 이전에

setState, setStateComponent, setStateDidMout ... **props, react, nodeJs** 에 대해 선행학습이 되어있어야 한다. 

## Hooks 의 등장으로 인해..

function component에서 state를 갖게 해줌으로써 functional programming 가능하도록 되었다. 즉, 클래스에서 벗어나서 함수형으로 진화할 수 있게 된 것! did mount, render ...등 신경 안써도 되기 때문에 개발 효율성을 극대화 시켜주었다.
-> hooks은 react의 state machine에 연결하는 아~주 기본적인 방법이 될 것이다!

----------

 **useEffect()** 
componentDidmount, componentDidUpdate, ComponentWillUnmount 상태일 때 작동한다. 첫번째 인자는 불러올 함수, 두번째 인자(dependency)는 변경을 감지할 변수이다. deps로 여러개 가능하며, 공란으로 남겨두는 것도 가능하다. **[] 으로 남겨 둘 경우에는 update 상태를 방지, 즉 첫 mount 및 willUnmount시에만 해당 함수가 작동한다. 함수를 그냥 () 닫아버리는 경우에는 update 상태도 포함이 되오니 조심하길 바란다.** useEffect가 함수를 return할 때도 있는데 componentWillUnmount 상태일 때다. **그러니 커스텀 함수들을 종료시킬 때 return 값 넣는 것을 잊지 않도록 하자 !**

```javascript
import "./styles.css";
import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  if (typeof onClick !== "function") return; // 예외처리
  useEffect(() => {
    if (element.current) element.current.addEventListener("click", onClick);
    //DidMount 1번 호출
    return () => {
      if (element.current)
        element.current.removeEventListener("click", onClick);
    };
    // Unmount 1번 호출
  }, []);

  return element;
};

export default function App() {
  const title = useClick(console.log("h1h1h1"));
  return (
    <div className="App">
      <h1 ref={title}> Hello hook world! </h1>
    </div>
  );
}

```

**useRef()** 
document.getElementById()와 비슷한 기능을 한다.
모든 react component는 ref 속성을 가지기 때문에 쉽게 사용이 가능하다.

```javascript
import React, { useEffect, useState } from "react";

export default function App() {
  const refExample = useRef();
  setTimeout(()=>refExample.current.focus(), 5000);
  return (
    <div className="App">
      <h1> "This is useTabs Hooks!" </h1>
      <input ref={refExample} placeholder="5초 후 자동 focused"></input> 
    </div>
  );
}

```

이 외...
 다양한 사용자 커스텀 hooks 은 해당 repo에서 확인이 가능하다! 

## 리뷰
addEventListner, event.predefault, useState, useRef, CustomHooks .. 등의 기술을 사용할 줄 알아여 하며, 컴포넌트에 대해 접근하는 방식과 함수형 스타일 안에서의 상호작용하는 방법과 친숙해져야 하고, function, value return 등 잘 사용할 줄 알아야 한다.
특히 useContext, useRecucer, useCallback, useMemo 등을 심층적으로 공부하여 실무에 적용해보는걸 추천한다.
[참고] https://ko.reactjs.org/docs/hooks-reference.html
