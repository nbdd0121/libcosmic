// Copyright 2022 System76 <info@system76.com>
// SPDX-License-Identifier: MPL-2.0

use std::borrow::Cow;

use crate::{
    widget::{column, horizontal_space, row, text, Row},
    Element,
};
use derive_setters::Setters;
use iced_core::Length;
use iced_widget::container;

/// A settings item aligned in a row
#[must_use]
#[allow(clippy::module_name_repetitions)]
pub fn item<'a, Message: 'static>(
    title: impl Into<Cow<'a, str>> + 'a,
    widget: impl Into<Element<'a, Message>> + 'a,
) -> Row<'a, Message> {
    item_row(vec![
        text(title).into(),
        horizontal_space(iced::Length::Fill).into(),
        widget.into(),
    ])
}

/// A settings item aligned in a row
#[must_use]
#[allow(clippy::module_name_repetitions)]
pub fn item_row<Message>(children: Vec<Element<Message>>) -> Row<Message> {
    row::with_children(children)
        .align_items(iced::Alignment::Center)
        .padding([0, 18])
        .spacing(12)
}

/// Creates a builder for an item, beginning with the title.
pub fn builder<'a, Message: 'static>(title: impl Into<Cow<'a, str>>) -> Item<'a, Message> {
    Item {
        title: title.into(),
        description: None,
        icon: None,
    }
}

/// A builder for a settings item.
#[derive(Setters)]
pub struct Item<'a, Message> {
    /// Describes the item being controlled.
    title: Cow<'a, str>,

    /// A description to display beneath the title.
    #[setters(strip_option, into)]
    description: Option<Cow<'a, str>>,

    /// A custom icon to display before the text.
    #[setters(strip_option, into)]
    icon: Option<Element<'a, Message>>,
}

impl<'a, Message: 'static> Item<'a, Message> {
    /// Assigns a control to the item.
    pub fn control(self, widget: impl Into<Element<'a, Message>>) -> Row<'a, Message> {
        let mut contents = Vec::with_capacity(4);

        if let Some(icon) = self.icon {
            contents.push(icon);
        }

        if let Some(description) = self.description {
            let column = column::with_capacity(2)
                .spacing(2)
                .push(text(self.title))
                .push(text(description).size(10))
                .width(Length::FillPortion(12));

            contents.push(column.into());
        } else {
            contents.push(text(self.title).into());
        }

        contents.push(
            container(widget.into())
                .width(Length::FillPortion(4))
                .align_x(iced_core::alignment::Horizontal::Right)
                .into(),
        );

        item_row(contents)
    }

    pub fn toggler(
        self,
        is_checked: bool,
        message: impl Fn(bool) -> Message + 'static,
    ) -> Row<'a, Message> {
        self.control(crate::widget::toggler(None, is_checked, message))
    }
}
