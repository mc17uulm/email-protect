<?php

/**
 * Copyright (c) 2021 CodeLeaf
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

namespace EmailProtect;

use Exception;

/**
 * Class PluginException
 * @package EMailProtect
 */
class PluginException extends Exception
{

    /**
     * @var string
     */
    private string $debug_msg;

    /**
     * @param string $debug_msg
     * @param string $message
     */
    public function __construct(string $debug_msg, string $message = "")
    {
        parent::__construct($message);
        $this->debug_msg = $debug_msg;
    }

    /**
     * @return string
     */
    public function get_debug_msg() : string {
        return $this->debug_msg;
    }

}