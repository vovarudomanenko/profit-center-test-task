import { styled } from "styled-components";

const CloseSvgContainer = styled.div`
  position: absolute;
  top: 22px;
  right: 32px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

const ListContainer = styled.div`
  margin-top: 20px;
  overflow: auto;
  height: 265px;
`;

const List = styled.div<{
  totalSize: number;
}>`
  position: relative;
  height: ${(props) => props.totalSize}px;
`;

const Row = styled.div<{
  size: number;
  start: number;
}>`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.size}px;
  transform: translateY(${(props) => props.start}px);
`;

const ID = styled.div`
  min-width: 75px;
`;

const Date = styled.div`
  min-width: 200px;
  margin-left: 10px;
`;

const Action = styled.div`
  margin-left: 10px;
`;

export { CloseSvgContainer, Title, ListContainer, List, Row, ID, Date, Action };
