import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { Card, Row, Text, Col, Button, Dropdown, Input } from '@nextui-org/react';

const Header = () => {
    return (
        <header>

            <Row gap={1}>
                <Col>
                    <Link href="/">
                        <Image
                            src="/assets/img/logo.png"
                            alt="logo"
                            width={180}
                            height={95}
                            priority
                        />
                    </Link>
                </Col>
                <Col>
                    <Row gap={0}>
                        <Col>
                            <Dropdown>
                                <Dropdown.Button flat>Trigger</Dropdown.Button>
                                <Dropdown.Menu aria-label="Static Actions">
                                    <Dropdown.Item key="new">New file</Dropdown.Item>
                                    <Dropdown.Item key="copy">Copy link</Dropdown.Item>
                                    <Dropdown.Item key="edit">Edit file</Dropdown.Item>
                                    <Dropdown.Item key="delete" withDivider color="error">
                                        Delete file
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Input placeholder="Search here..." />
                        </Col>
                        <Col>
                            <Button>Small</Button>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Card css={{ $$cardColor: '$colors$primary' }}>
                        <Card.Body>
                            <Text h6 size={15} color="white" css={{ m: 0 }}>
                                3 of 3
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <div></div>
        </header>
    );
}

export default Header;